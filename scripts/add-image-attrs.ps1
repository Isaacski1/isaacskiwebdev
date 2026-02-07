$root = (Get-Location).Path
Add-Type -AssemblyName System.Drawing
$cache = @{}

Get-ChildItem -Recurse -Filter *.html | ForEach-Object {
  $path = $_.FullName
  $content = Get-Content -Raw -LiteralPath $path

  $updated = [regex]::Replace($content, '(?is)<img\b[^>]*>', {
    param($m)
    $tag = $m.Value

    if ($tag -notmatch '(?i)\bloading\s*=') {
      $tag = $tag -replace '(?i)<img\b', '<img loading="lazy"'
    }
    if ($tag -notmatch '(?i)\bdecoding\s*=') {
      $tag = $tag -replace '(?i)<img\b', '<img decoding="async"'
    }

    $hasWidth = $tag -match '(?i)\bwidth\s*='
    $hasHeight = $tag -match '(?i)\bheight\s*='

    if (-not $hasWidth -or -not $hasHeight) {
      $srcMatch = [regex]::Match($tag, '(?i)\bsrc\s*=\s*["'']([^"'']+)["'']')
      if ($srcMatch.Success) {
        $src = $srcMatch.Groups[1].Value

        if ($src -notmatch '^(https?:)?//' -and $src -notmatch '^data:' -and $src -notmatch '\${') {
          $rel = $src.TrimStart('/')
          $filePath = Join-Path $root $rel
          $ext = [System.IO.Path]::GetExtension($filePath).ToLowerInvariant()

          if ($ext -in @('.jpg', '.jpeg', '.png', '.webp')) {
            if (-not $cache.ContainsKey($filePath)) {
              try {
                $img = [System.Drawing.Image]::FromFile($filePath)
                $cache[$filePath] = @{ w = $img.Width; h = $img.Height }
                $img.Dispose()
              } catch {
                $cache[$filePath] = $null
              }
            }

            $dim = $cache[$filePath]
            if ($dim -ne $null) {
              if (-not $hasWidth) {
                $tag = $tag -replace '(?i)<img\b', ('<img width="' + $dim.w + '"')
              }
              if (-not $hasHeight) {
                $tag = $tag -replace '(?i)<img\b', ('<img height="' + $dim.h + '"')
              }
            }
          }
        }
      }
    }

    return $tag
  })

  if ($updated -ne $content) {
    Set-Content -LiteralPath $path -Value $updated
  }
}

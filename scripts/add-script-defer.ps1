$root = (Get-Location).Path

Get-ChildItem -Recurse -Filter *.html | ForEach-Object {
  $path = $_.FullName
  $content = Get-Content -Raw -LiteralPath $path

  $updated = [regex]::Replace($content, '(?is)<script\b[^>]*\bsrc\s*=\s*["'']([^"'']+)["''][^>]*>', {
    param($m)
    $tag = $m.Value
    $src = $m.Groups[1].Value

    if ($tag -match '(?i)\bdefer\b' -or $tag -match '(?i)\basync\b') {
      return $tag
    }

    if ($tag -match '(?i)\btype\s*=\s*["'']module["'']') {
      return $tag
    }

    if ($src -match '^assets/js/' -or $src -match '^\.\/assets/js/') {
      return ($tag -replace '(?i)<script\b', '<script defer')
    }

    return $tag
  })

  if ($updated -ne $content) {
    Set-Content -LiteralPath $path -Value $updated
  }
}

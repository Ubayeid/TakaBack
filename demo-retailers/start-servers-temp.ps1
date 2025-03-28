# Start all servers
$jobs = @()

$jobs += Start-Job -ScriptBlock {
    Set-Location 'C:\Users\mduba\Development\personal\Rakuten\demo-retailers\fashionista'
    python -m http.server 8001
}
$jobs += Start-Job -ScriptBlock {
    Set-Location 'C:\Users\mduba\Development\personal\Rakuten\demo-retailers\freshmart'
    python -m http.server 8002
}
$jobs += Start-Job -ScriptBlock {
    Set-Location 'C:\Users\mduba\Development\personal\Rakuten\demo-retailers\beautystore'
    python -m http.server 8003
}
$jobs += Start-Job -ScriptBlock {
    Set-Location 'C:\Users\mduba\Development\personal\Rakuten\demo-retailers\bookworm'
    python -m http.server 8004
}
$jobs += Start-Job -ScriptBlock {
    Set-Location 'C:\Users\mduba\Development\personal\Rakuten\demo-retailers\homeplus'
    python -m http.server 8005
}
$jobs += Start-Job -ScriptBlock {
    Set-Location 'C:\Users\mduba\Development\personal\Rakuten\demo-retailers\sportzone'
    python -m http.server 8006
}
$jobs += Start-Job -ScriptBlock {
    Set-Location 'C:\Users\mduba\Development\personal\Rakuten\demo-retailers\toyland'
    python -m http.server 8007
}
$jobs += Start-Job -ScriptBlock {
    Set-Location 'C:\Users\mduba\Development\personal\Rakuten\demo-retailers\healthcare'
    python -m http.server 8008
}
$jobs += Start-Job -ScriptBlock {
    Set-Location 'C:\Users\mduba\Development\personal\Rakuten\demo-retailers\petstore'
    python -m http.server 8009
}
Write-Host "All servers are running. Press Ctrl+C to stop all servers."

try {
    while ($true) {
        Start-Sleep -Seconds 1
    }
} finally {
    # Clean up jobs when script is stopped
    $jobs | Stop-Job
    $jobs | Remove-Job
}

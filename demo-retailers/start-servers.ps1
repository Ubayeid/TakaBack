# Store configurations
$stores = @(
    @{ name = "fashionista"; port = 8001 },
    @{ name = "freshmart"; port = 8002 },
    @{ name = "beautystore"; port = 8003 },
    @{ name = "bookworm"; port = 8004 },
    @{ name = "homeplus"; port = 8005 },
    @{ name = "sportzone"; port = 8006 },
    @{ name = "toyland"; port = 8007 },
    @{ name = "healthcare"; port = 8008 },
    @{ name = "petstore"; port = 8009 }
)

# Create a temporary script to run all servers
$scriptContent = @"
# Start all servers
`$jobs = @()

"@

foreach ($store in $stores) {
    $storePath = Join-Path $PSScriptRoot $store.name
    if (Test-Path $storePath) {
        Write-Host "Starting server for $($store.name) on port $($store.port)..."
        $scriptContent += @"

`$jobs += Start-Job -ScriptBlock {
    Set-Location '$storePath'
    python -m http.server $($store.port)
}
"@
    } else {
        Write-Host "Warning: Directory for $($store.name) not found. Skipping..."
    }
}

$scriptContent += @"

Write-Host "All servers are running. Press Ctrl+C to stop all servers."

try {
    while (`$true) {
        Start-Sleep -Seconds 1
    }
} finally {
    # Clean up jobs when script is stopped
    `$jobs | Stop-Job
    `$jobs | Remove-Job
}
"@

# Save and run the temporary script
$tempScript = Join-Path $PSScriptRoot "start-servers-temp.ps1"
$scriptContent | Out-File $tempScript -Encoding UTF8

# Start the temporary script in a new window
Start-Process powershell -ArgumentList "-NoExit", "-File", $tempScript

Write-Host "`nAll servers have been started in a single window!"
Write-Host "Press Ctrl+C in the new window to stop all servers." 
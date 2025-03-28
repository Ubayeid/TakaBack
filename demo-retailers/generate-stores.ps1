# Store configurations
$stores = @(
    @{
        name = "Fashionista"
        description = "Trendy clothing and accessories for everyone"
        category = "Fashion"
        domain = "fashionista"
        cashbackRate = 3
        heroImage = "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        aboutImage = "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    @{
        name = "FreshMart"
        description = "Fresh groceries and household items"
        category = "Groceries"
        domain = "freshmart"
        cashbackRate = 2
        heroImage = "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        aboutImage = "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    @{
        name = "Beauty Store"
        description = "Cosmetics and beauty products"
        category = "Beauty"
        domain = "beautystore"
        cashbackRate = 3
        heroImage = "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        aboutImage = "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    @{
        name = "BookWorm"
        description = "Books, magazines, and educational materials"
        category = "Books"
        domain = "bookworm"
        cashbackRate = 2
        heroImage = "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        aboutImage = "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    @{
        name = "HomePlus"
        description = "Home decor and furniture"
        category = "Home"
        domain = "homeplus"
        cashbackRate = 3
        heroImage = "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        aboutImage = "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    @{
        name = "SportZone"
        description = "Sports equipment and accessories"
        category = "Sports"
        domain = "sportzone"
        cashbackRate = 2
        heroImage = "https://images.unsplash.com/photo-1517649763962-0c6231940131?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        aboutImage = "https://images.unsplash.com/photo-1517649763962-0c6231940131?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    @{
        name = "ToyLand"
        description = "Toys and games for all ages"
        category = "Toys"
        domain = "toyland"
        cashbackRate = 2
        heroImage = "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        aboutImage = "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    @{
        name = "HealthCare"
        description = "Health and wellness products"
        category = "Health"
        domain = "healthcare"
        cashbackRate = 3
        heroImage = "https://images.unsplash.com/photo-1532938914959-9f8c79c5c1a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        aboutImage = "https://images.unsplash.com/photo-1532938914959-9f8c79c5c1a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    @{
        name = "PetStore"
        description = "Pet supplies and accessories"
        category = "Pets"
        domain = "petstore"
        cashbackRate = 2
        heroImage = "https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        aboutImage = "https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
)

# Create store directories and copy template files
foreach ($store in $stores) {
    $storeDir = Join-Path $PSScriptRoot $store.domain
    if (-not (Test-Path $storeDir)) {
        New-Item -ItemType Directory -Path $storeDir
    }

    # Copy and customize index.html
    $indexContent = Get-Content (Join-Path $PSScriptRoot "store-template\index.html") -Raw
    $indexContent = $indexContent.Replace("{{STORE_NAME}}", $store.name)
    $indexContent = $indexContent.Replace("{{STORE_DESCRIPTION}}", $store.description)
    $indexContent = $indexContent.Replace("{{CASHBACK_RATE}}", $store.cashbackRate)
    $indexContent = $indexContent.Replace("{{HERO_IMAGE}}", $store.heroImage)
    $indexContent = $indexContent.Replace("{{ABOUT_IMAGE}}", $store.aboutImage)
    $indexContent = $indexContent.Replace("{{STORE_DOMAIN}}", $store.domain)
    $indexContent | Out-File (Join-Path $storeDir "index.html") -Encoding UTF8

    # Copy styles.css
    Copy-Item (Join-Path $PSScriptRoot "store-template\styles.css") (Join-Path $storeDir "styles.css")

    # Copy and customize script.js
    $scriptContent = Get-Content (Join-Path $PSScriptRoot "store-template\script.js") -Raw
    $scriptContent = $scriptContent.Replace("{{STORE_NAME}}", $store.name)
    $scriptContent = $scriptContent.Replace("{{CASHBACK_RATE}}", $store.cashbackRate)
    $scriptContent | Out-File (Join-Path $storeDir "script.js") -Encoding UTF8
}

Write-Host "All store websites have been generated successfully!" 
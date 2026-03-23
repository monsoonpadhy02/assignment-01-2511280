## ETL Decisions

### Decision 1 — Date Standardization
Problem: The raw dataset had inconsistent date formats (e.g., DD-MM-YYYY and MM/DD/YYYY).
Resolution: All dates were converted into a standard format YYYY-MM-DD and stored in the dim_date table.

### Decision 2 — Handling NULL Values
Problem: Some rows had missing values for product or store.
Resolution: Missing values were either removed or replaced with default values to maintain consistency.

### Decision 3 — Category Cleaning
Problem: Product categories had inconsistent casing like "electronics", "Electronics", "ELECTRONICS".
Resolution: All category names were converted to a standard format (capitalized) to ensure uniformity.

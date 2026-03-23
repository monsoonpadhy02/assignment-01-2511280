## Anomaly Analysis

### Insert Anomaly
In the dataset, we cannot add a new product or sales representative unless there is an order.
For example, if a new product is introduced but no order exists, we cannot insert it without creating a fake row.

### Update Anomaly
Customer information like city is repeated in multiple rows.
For example, customer "Aditya Shah" from Mumbai appears multiple times. 
If the city changes, we must update it in all rows, which may cause inconsistency.

### Delete Anomaly
If we delete a row containing the only record of a customer or product, we lose all their information.
For example, deleting the only row of "Rohan Iyer" will remove all his data from the system.
## Normalization Justification

Keeping all data in one table creates repetition and errors. 
For example, customer city is repeated in multiple rows, which leads to update problems. 
If data is not consistent, it becomes difficult to manage. 
Normalization divides the data into separate tables like customers, orders, and products. 
This reduces duplication and improves accuracy. 
Therefore, normalization is necessary and not over-engineering.

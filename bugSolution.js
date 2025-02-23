```javascript
// Solution: Check for an empty array before executing the query
function findDocuments(field, values) {
  if (values.length === 0) {
    return db.collection.find({}); // Return all documents
  } else {
    return db.collection.find({ field: { $in: values } });
  }
}
```
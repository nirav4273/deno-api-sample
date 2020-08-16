### Deno API using OAK

#### Run
```
deno run --allow-net index.ts
```

### API
- GET : http://localhost:8000/ - Get Book Details
- GET : http://localhost:8000/:id/info - Get Book info details.
- POST : http://localhost:8000/create - Create Book
    - JSON: {
        "id": 3,
        "name": "tedasddsadst"
    }
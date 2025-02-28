# Requições à api
- Precisa do **AXIOS**
## Types
- Thre's a version for each of this
    - Use  object to configure
    - pass a callback
    - Pass an object, but using the callback method (for better scalability)
- 2 types
    - one for the parameters
    - other for the return (isError, response, ...)
- To use ts autocomplete: ``<TYPE_HERE>``
```
handleApiCall<To_Do>({
    endpoint: "/todos/1"
})
```
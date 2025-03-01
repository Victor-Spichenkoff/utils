# Templates
## Laoding
- A spin wheel
- Can recieve a state to auto hidde
```
<Loading monitorState={res}/> // should recieve null or valid; just useState<TYPE | null>() -> break
<Loading/> // don't pass nothing == always showing, hide using condicional directly 
```
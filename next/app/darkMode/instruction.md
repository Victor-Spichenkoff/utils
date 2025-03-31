# Aviso
- Tudo foi feito localmente, na pasta darkMode
- Menos a implementação do layout, lib/providers e no layout root.
- pode precisar usar ```suppressHydrationWarning```


````
npm install next-themes
````


1. Criar o provedor
2. Aplicar o provedor no layout root
3. adicionar  ``` darkMode: "class" ``` ao tailwind config
4. No CSS
5. Controlar troca de tema, importado de next-themes; Tem um ** Theme toggle aqui **
````setTheme(theme === "dark" ? "light" : "dark")````

# CSS
- O que estiver no ``` :root ``` é usado no claro
- O que estiver no ```` .dark ```` é usado no escuro
- Deve colocar os dois para funcionar certinho
````
:root {
  --background: oklch(0.607 0.247 29.014);// vermelho no claro
  [...resto]
}

.dark {
  --background: oklch(0.548 0.25 262.375);// azul no escuro
}

````

- No tailwind config ele escolhe e só preciso usar o tema dele
````
colors: {
    background: "hsl(var(--background))",//uso esse, não o --bg
    foreground: "hsl(var(--foreground))",
    primary: "hsl(var(--primary))",
},
````

# Uso
````

````

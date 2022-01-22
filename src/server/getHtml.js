import getScript, { getCssStyle }from './grtScript'

export default (componemtHTML, path, store) => { 
    const html = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SSR</title>
    ${getCssStyle()}
</head>
<body>
    <div id="root">${componemtHTML}</div>
    <script>
        window.pageDatas=${JSON.stringify(store.getState())}
        window.requestPath="${path}"
    </script>
    ${getScript()}
</body>
</html>`
    return html
}
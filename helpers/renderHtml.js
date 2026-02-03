

export function renderHtml(content){
    return(`<!DOCTYPE html>
            <html>
                <head>
                <title>Paste Viewer</title>
                </head>

                <body style="background:#242424;">
                    <h1 style="color:white">Paste Viewer</h1>
                    <div style="background:rgb(73, 71, 71);color:white;padding:16px;border-radius:8px;height:auto;word-break:break-all;">
                        <pre>${content}</pre>
                    </div>
                </body>
            </html>`
        )
}
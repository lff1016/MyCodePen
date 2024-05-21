import './App.css';
import {useState, useEffect} from 'react';
import Editor from './components/Editor';

function App() {
  const [js, setJs] = useState('');
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setSrcDoc(`
      <html>
        <style>${css}</style>
        <body>${html}</body>
        <script>${js}</script>
      </html>
      `)
    }, 250)
    return () => clearTimeout(timer)
  }, [js, html, css])

  return (
    <div className='editor'>
      <div className='editor-container'>
        <Editor displayName='HTML' langue='xml' onChange={setHtml} value={html}/>
        <Editor displayName='JS' langue='javascript' onChange={setJs} value={js}/>
        <Editor displayName='CSS' langue='css' onChange={setCss} value={css}/>
      </div>
      <div className='editor-output'>
        <iframe srcDoc={srcDoc}  sandbox='allow-scripts' width='100%' height='100%'/>
      </div>
    </div>
  )
}

export default App

import {Controlled as CodeMirror} from 'react-codemirror2'
import './index.css'
// import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'

import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css';

import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/edit/closeBrackets'
import 'codemirror/addon/edit/matchBrackets'
import 'codemirror/addon/edit/matchtags'

import 'codemirror/addon/selection/active-line.js' // 代码高亮

import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/hint/show-hint.js'

import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/javascript-lint'
import 'codemirror/addon/lint/lint.css'

// const CodeMirror = require('react-codemirror')


const Editor = (props: any) => {
  const {displayName, langue, onChange, value} = props


  return (
    <div className='editor-wrapper'>
      <div className='editor-head'>
        <span>{displayName}</span>
        <button>放大</button>
      </div>
      <div className='editor-body'>
        <CodeMirror
          className='code-mirror-wrapper'
          value={value}
          onBeforeChange={(_, _2,val: any) => { 
            onChange(val)
          }}
          options={{
            mode: langue,
            theme: 'material',
            lineNumbers: true,
            lineWrapping: false,
            autoCloseTags: true,
            autoCloseBrackets: true,
            lint: true,
            matchBrackets: true,
            matchTags: true,
            indentUnit: 2,
            tabSize: 2,
            extraKeys: {                    //配置按键
              "Ctrl": "autocomplete",      // 按下`alt`时出现代码提示
            }
          }}
        />
      </div>
    </div>
  )
}

export default Editor;

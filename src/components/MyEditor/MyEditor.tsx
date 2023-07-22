import React, { Component } from 'react'
import {EditorState} from 'draft-js'
import dynamic from 'next/dynamic'
import { convertToRaw } from 'draft-js'
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false }
)
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

type MyEditorProps = {
  handleContent: (content: any) => void
}

type MyEditorState = {
  editorState: EditorState
}

export default class MyEditor extends Component<MyEditorProps, MyEditorState> {
  constructor(props: MyEditorProps) {
    super(props)

    this.state = {
      editorState: EditorState.createEmpty()
    }
  }

  onEditorStateChange = (editorState: any) => {
    this.setState({
      editorState,
    })
    this.props.handleContent(
      convertToRaw(editorState.getCurrentContent())
    )
  }

  render() {
    const { editorState }: any = this.state

    return (
      <Editor
        editorState={editorState}
        wrapperClassName="h-40 mb-48 md:mb-24"
        editorClassName="border border-gray-300 rounded-lg px-3 py-2 mb-5"
        placeholder="Escreva o conteúdo do texto aqui..."
        onEditorStateChange={this.onEditorStateChange}
        toolbar={{
          options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link'],
          inline: {
            options: ['bold', 'italic', 'underline', 'strikethrough'],
          },
        }}
      />
    )
  }
}

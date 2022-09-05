import React, { useState } from 'react'
import styled from "styled-components/macro";
import { colors, fonts, fontSize, spacing } from '../style'
import Button from './Button';
import InputBox from './InputBox';
import Spacer from './Spacer';

const Form = styled.div`
    max-width: 100%;
    text-align: center;
    right: 0;
    left: 0;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    position: relative;
`;

const Input = styled.input`
    display: none;
`

const Label = styled.label`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-width: 2px;
    border-radius: 1rem;
    border-style: dashed;
    border-color: #cbd5e1;
    background-color: ${props => props.active ? '#f8fafc' : '#ffffff'};
    padding: ${spacing.spacing16};
`

const UploadButton = styled.div`
    cursor: pointer;
    padding: 0.25rem;
    border: none;
    background: ${colors.accent};
    color: ${colors.textOnAccent};
    font-size: ${fontSize.fontSize1};
    border-radius: 3px;
    height: 40px;
    line-height: 28px;
    transition: all 400ms;
    :hover {
        opacity: 80%;
    }
`

const DragFileElement = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
`

const DropZone = styled.div`


`

const Icon = styled.div`
    img {
        width: 70px;
        filter: opacity(0.5); 
    }

`

const Title = styled.div`
    font-size: ${fontSize.fontSize2};
`

const Link = styled.div`
    text-decoration: underline;
    cursor: pointer;
`

const Instruction = styled.div`
    font-weight: 600;
`

const UploadSuccessMessage = styled.div``

const SuccessIcon = styled.div`
    img {
        width: 50px;
    }
`

const SuccessTitle = styled.div``

function DragDropFile({ onUplode }) {

  // drag state
  const [dragActive, setDragActive] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState(null);

  // ref
  const inputRef = React.useRef(null);

  const handleFile = files => {
    setSelectedFile(files[0]);
    onUplode(files[0])
  }

  const reset = (e) => {
      e.preventDefault()
      e.stopPropagation()
      setSelectedFile(null)
  }
  
  // handle drag events
  const handleDrag = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  
  // triggers when file is dropped
  const handleDrop = function(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files);
    }
  };
  
  // triggers when file is selected with click
  const handleChange = function(e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files);
    }
  };
  
// triggers the input when the button is clicked
  const onButtonClick = (e) => {
    e.preventDefault()
    inputRef.current.click();
  };
  
  return (
    <Form onDragEnter={handleDrag}>
      <Input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} />
      <Label htmlFor="input-file-upload" active={dragActive}>
        <DropZone>
            <Icon>
                <img src={selectedFile ? "/assets/ok.svg" : "/assets/diploma.svg"}/>
            </Icon>
            <Title>
                {selectedFile ? <span>הקובץ הועלה בהצלחה</span> : <span>גיליון ציונים אחרון</span>}
            </Title>
            <Spacer height={spacing.spacing8}/>
            {!selectedFile ? (
                <>
                    <Instruction>
                        <span>גרור ושחרר את הקובץ או</span>
                    </Instruction>
                    <Spacer height={spacing.spacing3}/>
                    <UploadButton onClick={onButtonClick}>בחר קובץ</UploadButton>
                </>
            ) : (
                <Link onClick={reset}>נקה</Link>
            )}

        </DropZone> 
      </Label>
      { dragActive && <DragFileElement onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></DragFileElement> }
    </Form>
  );
};

export default DragDropFile;
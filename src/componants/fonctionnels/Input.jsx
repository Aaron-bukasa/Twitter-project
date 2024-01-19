import { Children } from "react";

export default function Input({idInput, typeInput, urlImage, placeholderInput, inputStyle}) {

    typeInput = typeInput ? typeInput : 'text';
    placeholderInput && placeholderInput;
    inputStyle && inputStyle;
    const newImg = urlImage && <img src={urlImage} alt={idInput} />

    return (
        <label htmlFor={idInput} className={idInput}>
            {newImg}
            <input type={typeInput} id={idInput}  placeholder={placeholderInput} style={inputStyle}/>
        </label>
    )
}
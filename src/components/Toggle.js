import React, { useRef } from "react"
import styled, { keyframes, css } from "styled-components"

const Label = styled.label`
    position: absolute;
    top: 10%;
    left: 50%;
    display: inline-block;
    width: 100px;
    height: 50px;
    z-index: 2;
    transform: translate(-50%);

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }
`

const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #0f142e;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
    z-index: 1;
    // box-shadow: inset 7px 0 9px -7px #5ea3b6;
    &:focus{
        outline: none;
    }

    :before {
        position: absolute;
        border-radius: 50%;
        content: "";
        height: 40px;
        width: 40px;
        left: 5px;
        bottom: 5px;
        background-color: #4a5d91;
        -webkit-transition: 0.5s;
        transition: 0.5s;
    }
`
const String = styled.div`
    position: absolute;
    bottom: 15px;
    left: 22px;
`

const Line = styled.span`
    position: absolute;
    height: 40px;
    width: 2px;
    background-color: #95acb4;
`

const Knob = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #74bbcb;
    position: absolute;
    bottom: -49px;
    left: -4px;
`

const Checkbox = styled.input`
    :checked + ${Slider} {
        background-color: #5ebccf;
    }

    :focus + ${Slider} {
        box-shadow: 0 0 1px #2196f3;
    }

    :checked + ${Slider}:before {
        -webkit-transform: translateX(50px);
        -ms-transform: translateX(50px);
        transform: translateX(50px);
        background-color: #fffcd4;
        box-shadow: 0px 0px 16px 5px rgba(255, 252, 212, 0.75);
    }
`

const keyframesForAnimation = [
    { transform: "translateY(0)" },
    { transform: "translateY(15px)" },
    { transform: "translateY(0)" },
]

const Toggle = ({ toggleDayMode, isDayMode }) => {
    const stringRef = useRef()
    return (
        <Label>
            <Checkbox
                type="checkbox"
                onClick={() => {
                    stringRef.current.animate(keyframesForAnimation, {
                        duration: 800,
                        easing: "cubic-bezier(.5,-.75,.2,2)",
                    })
                    toggleDayMode()
                }}
                checked={isDayMode}
            />
            <Slider />
            <String ref={stringRef}>
                <Line />
                <Knob />
            </String>
        </Label>
    )
}

export default Toggle

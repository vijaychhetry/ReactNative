import React,{ Fragment } from "react";

type Props={
    show : Boolean
}
export const If =(props : Props)=>{
return <Fragment>{props.show ? props.children: null}</Fragment>
};

If.defaultProps = {
    show:true
}


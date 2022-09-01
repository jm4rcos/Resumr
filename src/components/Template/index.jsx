import React from 'react';
import Editor from '../Editor';
import { SideItem } from '../Preview/SideItem';
import Text from '../Text';
import { BasicTemplate } from './BasicTemplate';
import { FlexTemplate } from './FlexTemplate';
import { Container, Header, Side, Content } from "./styles";

export function Template (data) {

    if(data.type === 1){
        return <BasicTemplate data={data}/>
    }

    if (data.type === 2) {
      return <FlexTemplate data={data} />;
    }

    return <Container></Container>
}
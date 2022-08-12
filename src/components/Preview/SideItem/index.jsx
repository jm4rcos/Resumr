import React from 'react';
import { colors } from '../../../themes/colors';
import Text from '../../Text';

export function SideItem({ type, name, value, mb, mt, long, textMt, textMb }) {
  const styles = {
    marginTop: mt,
    marginBottom: mb,
    display: "flex",
    flexDirection: "column",
  };
  return (
    <div style={styles}>
      <Text
        content={type}
        type="title"
        color={colors.title}
        mb={6}
        size="96%"
      />
      <Text content={name} type="text" color={colors.text} size="86%" />
      <Text
        content={value}
        type="text"
        size="72%"
        color={colors.placeholder}
        mb={textMb}
      />
      <Text
        mt={textMt}
        content={long}
        type="text"
        color={colors.text}
        size="84%"
        mb={textMb}
      />
    </div>
  );
}
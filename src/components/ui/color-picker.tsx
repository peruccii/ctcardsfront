import React from 'react';
import { ColorPicker, Space } from 'antd';

interface ColorPickerDemoProps {
  params: URLSearchParams;
  pathname: string;
  replace: (
    url: string,
    options?: { scroll?: boolean; shallow?: boolean },
  ) => void;
  label: string;
  defaultColor: string;
  paramsSet: string;
}

const ColorPickerDemo = ({
  params,
  replace,
  pathname,
  label,
  defaultColor,
  paramsSet,
}: ColorPickerDemoProps) => (
  <Space className="mt-8">
    <Space direction="vertical" className="flex">
      <h3>{label} 👇</h3>
      <ColorPicker
        defaultValue={defaultColor}
        onChange={(value) => {
          params.set(paramsSet, value.toHexString());
          replace(`${pathname}?${params.toString()}`, {
            scroll: false,
          });
        }}
        size="large"
        showText
      />
    </Space>
  </Space>
);

export default ColorPickerDemo;

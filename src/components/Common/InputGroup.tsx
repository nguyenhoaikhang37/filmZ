import { ReactNode } from 'react';
import { Input } from '../../styles/GlobalComponents';

export interface Props {
  placeholder: string;
  icon: ReactNode;
  width?: string;
}

{
  /* <InputGroup placeholder="Search Movies or TV Shows" icon={<BsSearch />} width="34.4rem" /> */
}

export default function InputGroup({ placeholder, icon, width }: Props) {
  return (
    <Input width={width}>
      {icon}
      <input placeholder={placeholder} />
    </Input>
  );
}

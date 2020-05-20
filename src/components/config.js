import React, { Fragment } from 'react';
import { Input, Flex, Button } from '@fluentui/react-northstar';

const Config = () =>
  <Fragment>

    <Flex gap="gap.medium" padding="padding.medium" size="size.full">
      <Input clearable fluid inline placeholder="stripe public-key" defaultValue="asdfasdfa" type="password"  />
    </Flex>

    <Flex gap="gap.medium" padding="padding.medium" >
      <Input clearable fluid inline placeholder="stripe secret-key" defaultValue="" type="password"  />
    </Flex>

    <Flex gap="gap.medium" padding="padding.medium" hAlign="end" >
      <Button content="Save" />
    </Flex>

  </Fragment>

export default Config;

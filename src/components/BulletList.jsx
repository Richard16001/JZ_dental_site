import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem'

export default function MarkerList() {
  return (
      <List marker= "disc">
        <ListItem>The Shawshank Redemption</ListItem>
        <ListItem>Star Wars</ListItem>
        <ListItem>The Lord of the Rings: The Two Towers</ListItem>
      </List>
  );
}
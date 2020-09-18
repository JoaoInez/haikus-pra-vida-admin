import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Create,
  SimpleForm,
  TextInput,
  Edit,
  useAuthenticated,
} from "react-admin";
import useAuthorization from "../../hooks/useAuthorization";

export const BottomVerseList = (props) => {
  useAuthenticated();
  useAuthorization();

  return (
    <List {...props} title="Terceiro verso">
      <Datagrid rowClick="edit">
        <TextField source="verse" />
      </Datagrid>
    </List>
  );
};

export const BottomVerseCreate = (props) => {
  useAuthenticated();
  useAuthorization();

  return (
    <Create {...props} title="Terceiro verso">
      <SimpleForm>
        <TextInput source="verse" />
      </SimpleForm>
    </Create>
  );
};

export const BottomVerseEdit = (props) => {
  useAuthenticated();
  useAuthorization();

  return (
    <Edit {...props} title="Terceiro verso">
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="verse" />
      </SimpleForm>
    </Edit>
  );
};

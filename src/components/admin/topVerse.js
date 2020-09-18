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

export const TopVerseList = (props) => {
  useAuthenticated();
  useAuthorization();

  return (
    <List {...props} title="Primeiro verso">
      <Datagrid rowClick="edit">
        <TextField source="verse" />
      </Datagrid>
    </List>
  );
};

export const TopVerseCreate = (props) => {
  useAuthenticated();
  useAuthorization();

  return (
    <Create {...props} title="Primeiro verso">
      <SimpleForm>
        <TextInput source="verse" />
      </SimpleForm>
    </Create>
  );
};

export const TopVerseEdit = (props) => {
  useAuthenticated();
  useAuthorization();

  return (
    <Edit {...props} title="Primeiro verso">
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="verse" />
      </SimpleForm>
    </Edit>
  );
};

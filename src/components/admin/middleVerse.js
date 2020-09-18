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

export const MiddleVerseList = (props) => {
  useAuthenticated();
  useAuthorization();

  return (
    <List {...props} title="Segundo verso">
      <Datagrid rowClick="edit">
        <TextField source="verse" />
      </Datagrid>
    </List>
  );
};

export const MiddleVerseCreate = (props) => {
  useAuthenticated();
  useAuthorization();

  return (
    <Create {...props} title="Segundo verso">
      <SimpleForm>
        <TextInput source="verse" />
      </SimpleForm>
    </Create>
  );
};

export const MiddleVerseEdit = (props) => {
  useAuthenticated();
  useAuthorization();

  return (
    <Edit {...props} title="Segundo verso">
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="verse" />
      </SimpleForm>
    </Edit>
  );
};

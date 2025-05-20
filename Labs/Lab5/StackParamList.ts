import {ServiceItemProps} from './ServiceDetail';

export type RootStackParamList = {
  Login: undefined;
  HomeTab: undefined;
  AddService: undefined;
  ServiceDetail: ServiceItemProps;
  EditService: ServiceItemProps;
};

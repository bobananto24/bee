import React from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useSelector, useDispatch} from 'react-redux';
import {CurrentId, Modalbar, Refresh} from '../../actions';
import {DeleteTodoApi, UpdateTodoApi} from '../../services/API';
import {CustomToast, SCREEN} from '../Common';
export const ModalComponent = () => {
  const dispatch = useDispatch();
  const isModal = useSelector(states => states.TOGGLE.isModal);
  const currentId = useSelector(states => states.TODOS.currentId);
  const onComplete = async () => {
    const data = {
      completed: true,
    };
    let res = await UpdateTodoApi(currentId, data);
    if (res.status != 200) return CustomToast(false, 'Server Error');
    CustomToast(true, 'Marked as Complete');
    dispatch(Modalbar());
    dispatch(Refresh());
  };
  const onNotComplete = async () => {
    const data = {
      completed: false,
    };
    let res = await UpdateTodoApi(currentId, data);
    if (res.status != 200) return CustomToast(false, 'Server Error');
    CustomToast(true, 'Marked as Incomplete');
    dispatch(Modalbar());
    dispatch(Refresh());
  };
  const onDelete = async () => {
    let res = await DeleteTodoApi(currentId);
    if (res.status != 200) return CustomToast(false, 'Server Error');
    CustomToast(true, 'Deleted');
    dispatch(Modalbar());
    dispatch(Refresh());
  };
  return (
    <Modal
      transparent={true}
      visible={isModal}
      animationType={'slide'}
      onRequestClose={() => dispatch(Modalbar())}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => dispatch(Modalbar())}
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <TouchableWithoutFeedback>
          <View
            style={{
              width: SCREEN.WIDTH,
              height: RFValue(150),
              backgroundColor: 'white',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <TouchableOpacity onPress={() => onComplete()}>
              <Text
                style={{
                  fontSize: RFValue(25),
                  paddingTop: RFValue(10),
                  paddingHorizontal: RFValue(10),
                }}>
                Completed
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onNotComplete()}>
              <Text
                style={{
                  fontSize: RFValue(25),
                  paddingTop: RFValue(10),
                  paddingHorizontal: RFValue(10),
                }}>
                Not Completed
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => onDelete()}>
              <Text
                style={{
                  fontSize: RFValue(25),
                  paddingTop: RFValue(10),
                  paddingHorizontal: RFValue(10),
                }}>
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({});

import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  FlatList,
  TextInput,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CurrentId, Menubar, Modalbar, Refresh, Todos} from '../../actions';
import {styles} from '../../styles';
import {
  COLORS,
  CustomButton,
  CustomToast,
  HeaderComponent,
} from '../../constants';
import {useEffect} from 'react';
import {ModalComponent} from '../../constants/components';
import {AddTodoApi, GetTodoListApi} from '../../services/API';
import moment from 'moment';
import {localStyles} from './localStyles';

const HomePage = props => {
  const dispatch = useDispatch();
  const openedOnce = useSelector(states => states.TOGGLE.openedOnce);
  const account = useSelector(states => states.AUTH.account);
  const todos = useSelector(states => states.TODOS.todos);
  const completed = useSelector(states => states.TODOS.completed);
  const pending = useSelector(states => states.TODOS.pending);
  const refresh = useSelector(states => states.TODOS.refresh);
  const [newTodo, setNewTodo] = useState('');
  const [isInput, setIsInput] = useState(false);

  useEffect(async () => {
    let res = await GetTodoListApi(account.userId);
    if (res.status != 200) return CustomToast(false, 'Server Error');
    dispatch(Todos(res.data.data));
    console.log('todos=>', res.data.data);
  }, [refresh, completed]);
  const onAdd = async () => {
    var data = {
      name: newTodo,
      completed: false,
    };
    let res = await AddTodoApi(account.userId, data);
    if (res.status != 200) return CustomToast(false, 'Server Error');
    CustomToast(true, 'Task Added');
    dispatch(Refresh());
    setNewTodo('');
  };

  return (
    <View style={styles.container}>
      <HeaderComponent
        name={completed ? 'COMPLETED' : pending ? 'PENDING' : 'DASHBOARD'}
        onPress={() => {
          openedOnce ? dispatch(Menubar()) : null;
          dispatch(Menubar());
        }}
        source={require('../../assets/images/hamburger.png')}
        rightButton={() => setIsInput(prev => !prev)}
        style={
          isInput && {
            transform: [{rotate: '45deg'}],
          }
        }
      />
      <View style={[styles.subContainer]}>
        <FlatList
          data={todos}
          renderItem={({item}) => (
            <>
              <TouchableOpacity
                style={{width: '100%'}}
                onPress={() => {
                  dispatch(Modalbar()), dispatch(CurrentId(item._id));
                }}>
                {completed ? (
                  item.completed && (
                    <View>
                      <Text style={styles.date}>
                        {moment.utc(item.time).local().format('lll')}
                      </Text>
                      <Text style={[styles.text, {color: 'green'}]}>
                        {item.name}
                      </Text>
                    </View>
                  )
                ) : pending ? (
                  item.completed == false && (
                    <View>
                      <Text style={styles.date}>
                        {moment.utc(item.time).local().format('lll')}
                      </Text>
                      <Text style={[styles.text, {color: 'red'}]}>
                        {item.name}
                      </Text>
                    </View>
                  )
                ) : (
                  <View>
                    <Text style={styles.date}>
                      {moment.utc(item.time).local().format('lll')}
                    </Text>
                    <Text
                      style={[
                        styles.text,
                        {
                          textDecorationLine: item.completed
                            ? 'line-through'
                            : null,
                          color: item.completed ? 'green' : 'black',
                        },
                      ]}>
                      {item.name}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
              {completed ? (
                item.completed && <View style={styles.itemSeparatorComponent} />
              ) : pending ? (
                item.completed == false && (
                  <View style={styles.itemSeparatorComponent} />
                )
              ) : (
                <View style={styles.itemSeparatorComponent} />
              )}
            </>
          )}
          keyExtractor={item => item._id}
        />
        {isInput ? (
          <View style={localStyles.textbar}>
            <TextInput
              placeholder="Add new"
              style={[styles.TextInput, {width: '88%'}]}
              value={newTodo}
              onChangeText={text => setNewTodo(text)}
            />
            <TouchableOpacity onPress={onAdd}>
              <Image
                style={styles.Icon}
                source={require('../../assets/images/add-circle-fill.png')}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <CustomButton
            title="ADD NEW"
            onPress={() => setIsInput(prev => !prev)}
          />
        )}

        <ModalComponent />
      </View>
    </View>
  );
};
export default HomePage;

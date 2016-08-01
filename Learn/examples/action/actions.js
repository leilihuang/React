export const USER_ADD = 'USER_ADD';
export const USER_EDIT = 'USER_EDIT'
export const USER_DEL = 'USER_DEL'
export const USER_LIST = 'USER_LIST'
export const USER_INFO = 'USER_INFO'
export const USER_EDIT_SUB = 'USER_EDIT_SUB'

let count = 0;

export function addUser(obj){
	obj.key = count++;
	return {
		type: USER_ADD,
		obj
	}
}

export function delUser(id){
	return {
		type: USER_DEL,
		id
	}
}

export function listUser(ary){
	return {
		type: USER_LIST,
		ary
	}
}

export function userInfo(obj){
	return {
		type : USER_INFO,
		obj
	}
}

export function editUser(obj){
	return {
		type : USER_EDIT,
		obj
	}
}

export function editUserSub(obj){
	return {
		type : USER_EDIT_SUB,
		obj
	}
}
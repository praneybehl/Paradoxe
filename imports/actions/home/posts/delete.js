import Notifications from 'react-notification-system-redux';

export function deletePost(postId) {
  return dispatch => {
    swal({
      title: 'Are you sure?',
      text: 'If you delete this post you will not be able to recover it.',
      type: 'warning',
      showCancelButton: true,
      closeOnConfirm: true,
      confirmButtonText: 'Yes, delete post',
      confirmButtonColor: '#ec6c62'
    }, () => {
      Meteor.call('deletePost', postId, err => {
        if (err) {
          dispatch(
            Notifications.error({
              title: `An error occurred`,
              message: err.reason,
              position: 'tr',
              autoDismiss: 3,
              dismissible: true,
            })
          )
        } else {
          
        }
      });
    });
  }
}


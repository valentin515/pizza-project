import {observer} from "mobx-react-lite"
import notificationStore from "../store/notification"

const Notification = observer(() => {

 const {isActive, error, text} = notificationStore.notificationInfo;


  return (
        
              <div className={`notification ${isActive ? "active" : ""} ${error ? "error" : ""} tr-2`}>
                    <span className="fw-normal">{text}</span>
                    <button className="btn-notification" onClick={() => notificationStore.hideNotification()}>
                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5001 0L5.99947 4.125L1.49987 0L0 1.375L4.4996 5.5L0 9.625L1.49987 11L5.99947 6.875L10.5001 11L12 9.625L7.5004 5.5L12 1.375L10.5001 0Z" fill="white"/>
                        </svg> 
                    </button>
                </div>  

          
        
  );
})

export default Notification;





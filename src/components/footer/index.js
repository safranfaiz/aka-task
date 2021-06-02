import React from 'react';
import googlePlay from '../../assets/googlePlay.png'

const Footer = props =>{

  const data = props.data[0];

  return(
    <div>
      <div className="footer-section-1">
        <div class="footer-header-text">{data.title}</div>
        <div className="footer-desc">
          {data.decs.map( item => {
            return <div className="foot-text">
              <img className="footer-img" src={item.img} />
              <span>{item.text}</span> 
            </div>
          })}
        </div>
      </div>

      <div className="footer-section-2">
       <div className="icons-section">
        <div>
          {data.appDownlodingStoreIcon.map(item => {
            return(
              <img className="store-icon" src={item}/>
            )
          })}
          <span style={{ marginRight: "47%"}}></span>
          {data.paymentMethodIcon.map(item => {
            return(
              <img className="payment-method-icon" src={item}/>
            )
          })}
          <span className="payment-option-infor">Payment options will vary by merchant</span>
        </div>
        <div className="social-link-section">
          <div className="footer-image">
            <img className="footer-logo" src={data.footerVivinoIcon}/>
          </div>
          <div className="footer-link">
            {data.footerLinks.map(item => {
              return <span className="footer-link-text">{item}</span>
            })}
          </div>
          <div>
            {data.socialLinkIcon.map(item => {
              return <img className="social-link" src={item} />
            })}
          </div>
        </div>
          
       </div>
      </div>
    </div>
  )
}

export default Footer
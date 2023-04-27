import React, { Component } from 'react'

import ImageList from '@material-ui/core/ImageList'
import { Container } from 'react-bootstrap';
import { ImageListItem } from '@material-ui/core'
import { ImageListItemBar } from '@material-ui/core';
import styles from '../styles/ImageGallery.module.scss';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import queryString from 'querystring';
import ProductInfo01 from '../json/plist.json'
import ProductInfo02 from '../json/plist02.json'
import ProductInfo03 from '../json/plist03.json'
import ProductInfo04 from '../json/plist04.json'
import ProductInfo05 from '../json/plist05.json'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


class Workitems extends Component {

  constructor(props) {
    super(props);    

    const queryParams = new URLSearchParams(window.location.search);
    this.id = queryParams.get("id");
   
    console.log(this.id);
    if(this.id=="gen01"){
      this.width="450";

    }

    if(this.id=="gen02"){
      this.width="450";

    }

    if(this.id=="gen03"){
      this.width="450";

    }

    if(this.id=="gen04"){
      this.width="450";

    }

    if(this.id=="gen05"){
      this.width="600";

    }


  }
  render() {
    if(this.id=="gen01"){
    return (
      <Container fluid>
        <div className={styles.gallery}>
          <h3>Edition of 12</h3>
        <Row>
            {ProductInfo01.map((postDetail, idx) => {
              return (
               <Col key={idx} className='col-4-md'>
                    <p>{postDetail.name} {postDetail.description}</p>
                    <LazyLoadImage src={require(`../images/${this.id}/${postDetail.image}`)} 
                    width={this.width}
                    effect="blur"/>
                </Col>
               )
           })}
          
         </Row>
         </div>
         <div className={styles.spacebottom}></div>
      </Container>
   
    ) }

    else if(this.id=="gen02"){
      return (
        <Container fluid>
          <div className={styles.gallery}>
          <h3>Edition of 12</h3>
          <Row>
              {ProductInfo02.map((postDetail, idx) => {
                return (
                 <Col key={idx} className='col-4-md'>
                      <p>{postDetail.name} {postDetail.description}</p>
                      <LazyLoadImage src={require(`../images/${this.id}/${postDetail.image}`)}  
                      effect="blur" 
                      width={this.width}/>
                  </Col>
                 )
             })}
            
           </Row>
           </div>
           <div className={styles.spacebottom}></div>
        </Container>
     
      ) }
      else if(this.id=="gen03"){
        return (
          <Container fluid>
            <div className={styles.gallery}>
            <h3>Edition of 11</h3>
            <Row>
                {ProductInfo03.map((postDetail, idx) => {
                  return (
                   <Col key={idx} className='col-4-md'>
                        <p>{postDetail.name} {postDetail.description}</p>
                        <LazyLoadImage src={require(`../images/${this.id}/${postDetail.image}`)}  
                        width={this.width}
                        effect="blur"/>
                    </Col>
                   )
               })}
              
             </Row>
             </div>
             <div className={styles.spacebottom}></div>
          </Container>
       
        ) }

        else if(this.id=="gen04"){
          return (
            <Container fluid>
              <div className={styles.gallery}>
              <h3>Edition of 11</h3>
              <Row>
                  {ProductInfo04.map((postDetail, idx) => {
                    return (
                     <Col key={idx} className='col-4-md'>
                          <p>{postDetail.name} {postDetail.description}</p>
                          <LazyLoadImage src={require(`../images/${this.id}/${postDetail.image}`)} 
                          width={this.width}
                          effect="blur"/>
                      </Col>
                     )
                 })}
                
               </Row>
               </div>
               <div className={styles.spacebottom}></div>
            </Container>
         
          ) }

          else if(this.id=="gen05"){
            return (
              <Container fluid>
                <div className={styles.gallery}>
                  <h3>Edition of 10</h3>
                <Row>
                    {ProductInfo05.map((postDetail, idx) => {
                      return (
                       <Col key={idx} className='col-3-md'>
                            <p>{postDetail.name} {postDetail.description}</p>
                            <LazyLoadImage src={require(`../images/${this.id}/${postDetail.image}`)} 
                            width={this.width}
                            effect="blur"/>
                        </Col>
                       )
                   })}
                  
                 </Row>
                 </div>
                 <div className={styles.spacebottom}></div>
              </Container>
           
            ) }
  }

 //{

    // return (
     
    //     <div className={styles.gallery}><h1>Edition</h1>
         
        
    // {/* <ImageList cols={5} rowHeight={450}> */}
    //   <Row className="row"><Col className="col-md-3">
    //     {ProductInfo.map((data, idx) => (
    //      <ImageListItem  key={idx} className={styles.imageItem}>
    //        <img src={require(`../images/gen01/${data.image}`)} width="450"/>
    //     {/* <Link to={"/item/search?id=" + data.key+"&seed="} onClick={() => this.handleClick(data.key)}>
    //         <img src={require(`../images/gen01/${data.image}`)}/>
    //         </Link> */}
    //         <ImageListItemBar
    //         title={data.name}

    //       />
    //       </ImageListItem >
    //     ))}
    //     </Col></Row>
    // {/* </ImageList > */}
     
    //     </div>
    //   );
    //}
}

export default Workitems
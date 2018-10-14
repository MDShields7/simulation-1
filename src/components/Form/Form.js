import React, { Component } from 'react'
import './Form.css';

export default class Form extends Component {
    constructor (){
        super();
        this.state = {
            image_url: '',
            name: '',
            price: 0,
        }
    this.handleChange_Img = this.handleChange_Img.bind(this);
    this.handleChange_Nam = this.handleChange_Nam.bind(this);
    this.handleChange_Prc = this.handleChange_Prc.bind(this);
    this.cancel = this.cancel.bind(this);
    this.post = this.post.bind(this);
    }
    handleChange_Img (e){
        this.setState({
            image_url: e.target.value,
        })
        // console.log('hc_img state changed', this.state.image_url)
    }
    handleChange_Nam (e){
        this.setState({
            name: e.target.value,
        })
    }
    handleChange_Prc (e){
        this.setState({
            price: e.target.value,
        })
    }
    post (){
        console.log('form.js, post')
        this.props.postMethod(this.state.name, this.state.price, this.state.image_url);
        this.cancel();
    }
    update (){
        console.log('form.js, update')
        this.props.updateMethod(this.state.id, this.state.name, this.state.price, this.state.image_url);
        this.cancel();        
    }
    cancel () {
        this.setState({
            image_url: '',
            name: '',
            price: 0,
        })
    }
  render() {
      const {image_url, name, price} = this.state;
        const{updateMethod, postItem, editing, editItem} = this.props
        // console.log('form.js',image_url, price, name)

      return (
      <div className='box'>
        {
            editing
            ?
            <div>
                <div className='form-text'>editing Image URL:</div>
                <input type="text" value={image_url} onChange={this.handleChange_Img}/>
                <div className='form-text'>editing Product Name:</div>
                <input type="text" value={name} onChange={this.handleChange_Nam}/>
                <div className='form-text'>editing Price:</div>
                <input type="text"value={price} onChange={this.handleChange_Prc}/>
                <section className='form-btns'>
                    <button onClick={ () => this.update(this.props.id)}>editing Add</button>
                    <button onClick={this.cancel}>editing Cancel</button>
                </section>
            </div>
            :
            <div>
                <div className='form-text'>Image URL:</div>
                <input type="text" value={image_url} onChange={this.handleChange_Img}/>
                <div className='form-text'>Product Name:</div>
                <input type="text" value={name} onChange={this.handleChange_Nam}/>
                <div className='form-text'>Price:</div>
                <input type="text"value={price} onChange={this.handleChange_Prc}/>
                <section className='form-btns'>
                    <button onClick={ () => this.post()}>Add</button>
                    <button onClick={this.cancel}>Cancel</button>
                </section>
            </div>
        }
      </div>
    )
  }
}

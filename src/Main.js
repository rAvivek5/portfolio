import React from 'react'
import './Main.css'
import {
  Mail,
  GitHub,
  Instagram,
  LinkedCameraOutlined,
  LinkedIn,
  DensityMedium,
} from '@mui/icons-material'

const Main = () => {
  return (
    <div className='main'>
      <div className='main__nav'>
        <a className='main__nav_argumentsP'>Portfolio</a>
        <a href='https://helper-a77d7.web.app/' className='main__nav_arguments'>
          Latest Project
        </a>

        <a
          href='https://drive.google.com/file/d/1wx36v-2Kfx7N5E3Cre9DufRgjxvZcUBn/view?usp=sharing'
          className='main__nav_arguments'
        >
          Resume
        </a>
      </div>

      <div className='main__image'>
        <h3 className='margin__in'>
          <img
            className='image'
            src='https://miro.medium.com/fit/c/262/262/1*Eo9GHYvSuKOvHz8dN_iPOQ.png'
            alt=''
          />
        </h3>
      </div>

      <div className='main__description'>
        <h1>Hola Universo!</h1>
        <p>🔷Mi Nombre Vivek Pundkar🔷</p>
        <p>I love eating chess and create interseting projects</p>
        <p>
          Most often, the acronym G.O.A.T. praises exceptional athletes but also
          musicians and other public figures.
        </p>
        <p>On social media, it’s common to see the goat</p>
        {/* <p> emoji in punning relation to the acronym.</p> */}
      </div>
      <hr></hr>
      <div className='main__highlighted Project'>
        <h2 className='highlighted'>Highlighted Project</h2>

        <div className='highlighted__project'>
          <div className='project'>
            <img
              className='project__image'
              src='https://images.squarespace-cdn.com/content/v1/5a94c07ab27e391107f7b96e/1590451683158-Y5SG768TEQN2YBOS7D6E/image-asset.jpeg'
              alt=''
            />
            <h2 className='project__title'>Amazon-Clone</h2>
            <h3 className='project__description'>
              Rabbits are small, furry mammals with long ears, short fluffy
              tails, and strong, large hind legs. They have 2 pairs of sharp one
            </h3>
            <div className='links'>
              <a className='abc' href='https://clone-de.web.app/'>
                PROJECT LINK
              </a>

              <a className='abc' href='https://github.com/rAvivek5/clone-AMAZON'>
                VISIT PROJECT
              </a>
            </div>
          </div>

          <div className='project'>
            <img
              className='project__image'
              src='https://i.guim.co.uk/img/media/583b1b167c0b51719de576054d524326e577b21f/0_206_4488_2693/master/4488.jpg?width=700&quality=45&auto=format&fit=max&dpr=2&s=d58c7f3365daeb308c401b9d9c52e510'
              alt=''
            />
            <h2 className='project__title'>Covid Helper</h2>
            <h3 className='project__description'>
              Goat, any ruminant and hollow-horned mammal belonging to the genus
              Capra. Related to the sheep, the goat is lighter of build, has
            </h3>
            <div className='links'>
              <a className='abc' href='https://helper-a77d7.web.app/'>
                PROJECT LINK
              </a>

              <a className='abc' href='https://github.com/rAvivek5/Helper'>
                VISIT PROJECT
              </a>
            </div>
          </div>

          <div className='project'>
            <img
              className='project__image'
              src='https://i.natgeofe.com/n/1e38ab75-6d81-45e9-817c-3181a146165e/01pandainsemination_2x1.jpg'
              alt=''
            />
            <h2 className='project__title'>SocialPlus</h2>
            <h3 className='project__description'>
              Giant pandas have a distinctive black and white coat, with black
              fur around their eyes and on their ears, muzzle, legs and
              shoulders.{' '}
            </h3>
            <div className='links'>
              <a className='abc' href='https://photography-a9d5a.web.app/'>
                PROJECT LINK
              </a>

              <a className='abc' href='https://github.com/rAvivek5/'>
                VISIT PROJECT
              </a>
            </div>
          </div>
        </div>
        <h1 className='highlighted'>Connect with me !</h1>
        <div className='media'>
          <div>
            <a href='https://www.linkedin.com/in/vivek-pundkar/'>
              <LinkedIn sx={{ fontSize: 50 }} className='icons' />
            </a>

            <a href='https://www.instagram.com/vivek__pundkar/'>
              <Instagram sx={{ fontSize: 50 }} className='icons' />
            </a>

            <a href='https://github.com/rAvivek5/'>
              <GitHub sx={{ fontSize: 50 }} className='icons' />
            </a>

            <a href='https://medium.com/@vivek.pundkar19'>
              <Mail sx={{ fontSize: 50 }} className='icons' />
            </a>
          </div>
        </div>
      </div>
      <div className='center'>vivek__pundkar</div>
    </div>
  )
}

export default Main

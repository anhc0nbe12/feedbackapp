import PropTypes from 'prop-types'


function Card({children, my, border, borderColor}) {
  return (
    <div className={`card ${'my-'+my} ${border ? 'border':''} ${'border-'+borderColor}`}>
      {children}
    </div>
  )
}
Card.propTypes ={
   children: PropTypes.node.isRequired,
   my: PropTypes.number,
   border: PropTypes.bool,
   borderColor: PropTypes.string
}

Card.defaultProps = {
   border: true,
   my: 0,
   borderColor: 'info',
}

export default Card

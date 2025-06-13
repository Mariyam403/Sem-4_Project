// Create React app to pass color red , bg color yellow , fontsize 25px , fontstyle italic as property and apply css to 'LJ students' text return in p tag.

const Pb361app = (props) => {
  return (
    <>
      <p style={{color: props.css.color, backgroundColor: props.css.bgcolor, fontSize: props.css.fontsize, fontStyle: props.css.fontstyle }}>LJ students</p>
    </>
  )
}

export default Pb361app
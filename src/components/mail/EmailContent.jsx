import flaticonWelcomeImage from '../../assets/images/flaticon-welcome-image.png'

export default function Content() {
  return (
    <section className="email-body">
      <div className="content">
        <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
      </div>
    </section>
  )
}
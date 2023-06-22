const CardParagraph = ({posBottom, posTop}) => {
  return (
    <div className={`bg-[white] p-[20px] rounded-xl absolute mx-2`} style={{
      bottom: posBottom,
      top: posTop
    }}>
      <p className="font-poppins text-[24px] text-primary">Lorem ipsum dolor sit amet consectetur </p>
    </div>
  )
}

export default CardParagraph
export const getDemonstratioArray = (
  jsonDemonstratio: Array<DemonstratioInterface>,
  i: number
): Array<string> => {
  return jsonDemonstratio.reduce<Array<string>>((arrayOfTxt, dem) => {
    if (dem.propositioId === i.toString()) {
      arrayOfTxt.push(dem.txt)
    }
    return arrayOfTxt
  }, [])
}

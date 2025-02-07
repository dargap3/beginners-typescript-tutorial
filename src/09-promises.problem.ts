interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
  // another solution could be add the data type: data: LukeSkywalker;

  const data = await fetch("https://swapi.py4e.com/api/people/1").then(
    (res) => {
      return res.json();
    }
  );

  // another solution could be add cast data as a type: return data as LukeSkywalker;

  return data;
};

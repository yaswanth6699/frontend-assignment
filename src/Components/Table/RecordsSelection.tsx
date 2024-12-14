import { RecordsProps } from "../../types";
import { RECORDS_DETAILS } from "./constants";
import "./styles.css";
const RecordsSelection = ({ records, setRecords }: RecordsProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecords(+e.target.value);
  };
  return (
    <div className="records-select">
      Records Per Page:{" "}
      <span className="radio-group">
        {RECORDS_DETAILS.map((item) => (
          <div className="label-group">
            <input
              type={item.type}
              value={item.value}
              onChange={handleChange}
              checked={records === item.value}
            />
            <label>{item.label}</label>
          </div>
        ))}
      </span>
    </div>
  );
};

export default RecordsSelection;

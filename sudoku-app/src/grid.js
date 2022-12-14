import { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const elements = "153984627964257813782613594821745369649832175375196248296378451518429736437561982".split("");

export function Grid({ cellCount = 81, size = 360 }) {
  const groupCount = cellCount / 9;
  
  return (
    <View 
      style={{
        ...styles.gridContainer,
        width: size,
        height: size,
      }}
    >
      {Array(groupCount).fill(0).map((_, index) => {
        

        return (
          <Group 
            size={size/3}
            groupIndex={index}
          />
        );
      })}

    </View>
  );
}

export function Group({ children, size = 144, groupIndex }) {
  const cellSize = (size - 8) / 3;

  return (
    <View 
      style={{
        ...styles.group,
        width: size - 4,
        height: size - 4,
      }}
    >
      {Array(9).fill(0).map((_, cellIndex) => {
        const groupRow = Math.floor(groupIndex / 3); 
        const groupColumn = groupIndex % 3; 
        const cellRow = Math.floor(cellIndex / 3);
        const cellColumn = cellIndex % 3;
        const boardRow = 3 * groupRow + cellRow;
        const boardRowStartIndex = boardRow * 9;
        const boardCellIndex = boardRowStartIndex + (3 * groupColumn) + cellColumn;

        return (
          <Cell value={`${elements[boardCellIndex]}`} size={cellSize} />
        );
      })}
    </View>
  );
}

export function Cell({ value, size = 48 }) {
  const [selected, setSelected] = useState(false);

  return (
    <View 
      onTouchStart={() => setSelected(!selected)}
      style={{
        ...styles.cell,
        ...(selected ? styles.selectedCell : {}),
        height: size - 2,
        width: size - 2,
      }}
    >
      <Text style={{ fontSize: size / 3 }}>
        { value } 
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    display: 'flex',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 400, 
  },
  group: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 144, 
    marginHorizontal: 1,
    marginVertical: 1,
  },
  cell: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0,0,0,0.05)',
    marginVertical: 1,
    marginHorizontal: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedCell: {
    backgroundColor: 'rgba(0,0,0,0.2)',
  }
});


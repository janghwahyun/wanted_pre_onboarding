import { useState } from 'react';
import styled from 'styled-components';

export const Tag = () => {
  const [tags, setTags] = useState([]);

  const removeTags = indexToRemove => {
    setTags(
      tags.filter(tag => {
        return tag !== tags[indexToRemove];
      })
    );
  };

  const addTags = event => {
    let value = event.target.value;

    if (event.key === 'Enter' && !tags.includes(value) && value) {
      setTags([...tags, value]);

      event.target.value = '';
    } else if (event.key === 'Enter' && !value) {
      event.target.value = '';
    } else if (tags.includes(value) ){
        return window.alert("같은 단어는 넣을 수 없습니다 ^^")
    }
  };

  const alert = event => {
    let value = event.target.value;

    if (){}
  }

  return (
    <>
      <strong>Tag</strong>
      <TagsInput>
        <ul id="tags">
          {tags.map((tag, index) => (
            <li key={index} className="tag">
              <span className="tag-title">{tag}</span>
              <span className="tag-close-icon" onClick={() => removeTags(index)}>
                &times;
              </span>
            </li>
          ))}
        </ul>
        <input
          className="tag-input"
          type="text"
          onKeyUp={event => {
            addTags(event);
          }}
          placeholder="Press enter to add tags"
        />
      </TagsInput>
    </>
  );
};
const TagsInput = styled.div`
  margin: 8rem auto;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  width: 480px;
  padding: 0 8px;
  border: 1px solid rgb(214, 216, 218);
  border-radius: 6px;

  > ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;

    > .tag {
      width: auto;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      padding: 0 8px;
      font-size: 14px;
      list-style: none;
      border-radius: 6px;
      margin: 0 8px 8px 0;
      background: purple;
      > .tag-close-icon {
        display: block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        font-size: 14px;
        margin-left: 8px;
        color: purple;
        border-radius: 50%;
        background: white;
        cursor: pointer;
      }
    }
  }

  > input {
    flex: 1;
    border: none;
    height: 46px;
    font-size: 14px;
    padding: 4px 0 0 0;
    :focus {
      outline: transparent;
    }
  }

  &:focus-within {
    border: 1px solid purple;
  }
`;

export default Tag;

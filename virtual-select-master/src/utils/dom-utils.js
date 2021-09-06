import { Utils } from './index';

export class DomUtils {
  static addClass($ele, className) {
    if (!$ele) {
      return;
    }

    className = className.split(' ');

    DomUtils.getElements($ele).forEach(($this) => {
      $this.classList.add(...className);
    });
  }

  static removeClass($ele, className) {
    if (!$ele) {
      return;
    }

    className = className.split(' ');

    DomUtils.getElements($ele).forEach(($this) => {
      $this.classList.remove(...className);
    });
  }

  static toggleClass($ele, className, isAdd) {
    if (!$ele) {
      return;
    }

    if (isAdd !== undefined) {
      isAdd = Boolean(isAdd);
    }

    let isAdded;

    DomUtils.getElements($ele).forEach(($this) => {
      isAdded = $this.classList.toggle(className, isAdd);
    });

    return isAdded;
  }

  static hasClass($ele, className) {
    if (!$ele) {
      return false;
    }

    return $ele.classList.contains(className);
  }

  static hasEllipsis($ele) {
    if (!$ele) {
      return false;
    }

    return $ele.scrollWidth > $ele.offsetWidth;
  }

  static getMoreVisibleSides($ele) {
    if (!$ele) {
      return {};
    }

    let box = $ele.getBoundingClientRect();
    let availableWidth = window.innerWidth;
    let availableHeight = window.innerHeight;
    let leftArea = box.left;
    let topArea = box.top;
    let rightArea = availableWidth - leftArea - box.width;
    let bottomArea = availableHeight - topArea - box.height;
    let horizontal = leftArea > rightArea ? 'left' : 'right';
    let vertical = topArea > bottomArea ? 'top' : 'bottom';

    return {
      horizontal,
      vertical,
    };
  }

  static getData($ele, name, type) {
    if (!$ele) {
      return;
    }

    let value = $ele ? $ele.dataset[name] : '';

    if (type === 'number') {
      value = parseFloat(value) || 0;
    } else {
      if (value === 'true') {
        value = true;
      } else if (value === 'false') {
        value = false;
      }
    }

    return value;
  }

  static setData($ele, name, value) {
    if (!$ele) {
      return;
    }

    $ele.dataset[name] = value;
  }

  static setStyle($ele, name, value) {
    if (!$ele) {
      return;
    }

    $ele.style[name] = value;
  }

  static getElements($ele) {
    if (!$ele) {
      return;
    }

    if ($ele.forEach === undefined) {
      $ele = [$ele];
    }

    return $ele;
  }

  static addEvent($ele, events, callback) {
    if (!$ele) {
      return;
    }

    events = Utils.removeArrayEmpty(events.split(' '));

    events.forEach((event) => {
      $ele = DomUtils.getElements($ele);

      $ele.forEach(($this) => {
        $this.addEventListener(event, callback);
      });
    });
  }

  static dispatchEvent($ele, eventName) {
    if (!$ele) {
      return;
    }

    $ele = DomUtils.getElements($ele);

    /** using setTimeout to trigger asynchronous event */
    setTimeout(() => {
      $ele.forEach(($this) => {
        $this.dispatchEvent(new Event(eventName, { bubbles: true }));
      });
    }, 0);
  }

  /** convert object to style attribute */
  static getStyleText(props, skipAttrName) {
    let result = '';

    for (let k in props) {
      result += `${k}: ${props[k]};`;
    }

    if (result && !skipAttrName) {
      result = `style="${result}"`;
    }

    return result;
  }

  /** convert object to dom attributes */
  static getAttributesText(data) {
    let html = '';

    if (!data) {
      return html;
    }

    for (let k in data) {
      let value = data[k];

      if (value !== undefined) {
        html += ` ${k}="${value}" `;
      }
    }

    return html;
  }
}

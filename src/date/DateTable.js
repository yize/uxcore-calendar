// customized rc-calendar https://github.com/react-component/calendar/blob/master/

import React from 'react';
import DateTHead from 'rc-calendar/lib/date/DateTHead';
import DateTBody from './DateTBody';

export default
class DateTable extends React.Component {
  render() {
    const props = this.props;
    const prefixCls = props.prefixCls;
    return (<table className = {`${prefixCls}-table`} cellSpacing="0" role="grid">
      <DateTHead {...props}/>
      <DateTBody {...props}/>
    </table>);
  }
}
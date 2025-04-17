import { Box, Text, Button } from '@radix-ui/themes';

const Attachment = ({ data }) => {
  const handleDownload = async url => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');

      const blob = await response.blob(); // Blob 객체 생성
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob); // Blob URL 생성
      link.setAttribute('download', data[0].originalName); // filename을 지정하지 않으면 기본 filename 사용
      document.body.appendChild(link);
      link.click(); // 다운로드 실행
      document.body.removeChild(link); // 링크 제거
      window.URL.revokeObjectURL(link.href); // 메모리 해제
    } catch (error) {
      console.error('Download error:', error);
    }
  };

  return (
    <Box className="post-outline">
      {data?.map((el, i) => (
        <Button
          key={i}
          variant="ghost"
          size="1"
          onClick={() => handleDownload(el?.url, el?.originalName)}
        >
          {el?.extension === 'pdf' ? (
            <img src={'/images/icon/icon-pdf.svg'} alt="pdf아이콘" />
          ) : el?.extension === 'xls' ? (
            <img src={'/images/icon/icon-xls.svg'} alt="Xls아이콘" />
          ) : (
            <img src={'/images/icon/icon-png.svg'} alt="png아이콘" />
          )}
          <Text as="p" color="gray" className="body2">
            {el?.originalName}
          </Text>
        </Button>
      ))}
    </Box>
  );
};

export { Attachment };

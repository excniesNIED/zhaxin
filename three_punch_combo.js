        $i = 0;
        $('#start').click(function(){
            $i++;
            if($i >=6 ){
                $('#start').hide();
                $('#stop').show();
            }
        })
        $('#stop').click(function(){
            alert('鍒锋柊涓€涓嬶紝缁х画鎵庡績')
            $(this).hide();
        })